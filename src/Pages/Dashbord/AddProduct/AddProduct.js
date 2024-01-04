import React, { useState, } from 'react'
import { setDoc, doc } from "firebase/firestore";
import { firestore } from '../../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../config/firebase";
import { toast } from 'react-toastify';
const initialState = {
  name: "",
  serial: "",
  company: "",
  price: "",
  description: "",
  category: "",
  reviews: "",
  stock: "",
}
export default function AddProduct() {
  const [state, setstate] = useState(initialState)
  const [file, setfile] = useState()
  const [progress, setprogress] = useState(0)
  const [isuploading, setisuploading] = useState(false)
  const [isuploadingtwo, setisuploadingtwo] = useState(false)

  const handelChange = (e) => {
    setstate(s => ({ ...s, [e.target.name]: e.target.value }))

  }
  const ImagehandelChange = (e) => {
    setfile(e.target.files[0])

  }
  const handelSubmit = e => {
    e.preventDefault();
    let {
      serial,
      name,
      company,
      price,
      description,
      category,
      reviews,
      stock } = state;
    if (!serial) {
      return toast.warning("Please Enter ID", { position: "bottom-left" })
    }
    if (!name) {
      return toast.warning("Please Enter NAME", { position: "bottom-left" })
    }
    if (!company) {
      return toast.warning("Please Enter COMPANY", { position: "bottom-left" })
    }
    if (!price) {
      return toast.warning("Please Enter PRICE", { position: "bottom-left" })
    }
    if (!file) {
      return toast.warning("Please SELECT FILE", { position: "bottom-left" })
    }
    if (!description) {
      return toast.warning("Please Enter DETAILS", { position: "bottom-left" })
    }
    if (!category) {
      return toast.warning("Please Enter CATEGORY", { position: "bottom-left" })
    }
    if (!reviews) {
      return toast.warning("Please Enter REVIEWS", { position: "bottom-left" })
    }
    if (!stock) {
      return toast.warning("Please Enter STOCK", { position: "bottom-left" })
    }

    const fileExt = file.name.split('.').pop()
    const randomId = Math.random().toString(36).slice(3)

    const storageRef = ref(storage, `Media/${randomId}.${fileExt}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setisuploadingtwo(true)
    setisuploading(true)
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        
        setprogress(progress)
        if (progress == 100) {
          setTimeout(() => {
            setisuploading(false)
          }, 1000);
        }
      }, (error) => {
        // Handle unsuccessful uploads
        console.error(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          state.image = downloadURL;
          let id = Math.random().toString(36).slice(2)
          state.id = id

          try {
            await setDoc(doc(firestore, "Products", id), state);

          }
          catch (err) {

          }
          // await setDoc(doc(firestore, "Products", id), { state, downloadURL, id: id })
          toast.success("Add Product SuccessFully", { position: "bottom-left" })
          setisuploadingtwo(false)

        });
      }
    )
    setstate(initialState)
  }

  return (
    <>
      <div className="container px-5">
        <div className="row">
          <div className="col">
            <form>
              <div className="row bg p-3 text-center my-2 mb-4 rounded-3">
                <div className="col">
                  <h3 className='text-danger'>Add Product</h3>
                </div>
              </div>
              <div className="row bg p-3 my-2 mb-4 rounded-3">
                <div className="col-12 col-md-6 col-lg-6">
                  <label>ID</label>
                  <input type="text" className='form-control shadow-none' value={state.serial} name='serial' onChange={handelChange} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label>NAME</label>
                  <input type="text" className='form-control shadow-none' name='name' value={state.name} onChange={handelChange} />
                </div>
              </div>
              <div className="row p-3 bg my-2 mb-4 rounded-3">
                <div className="col-12 col-md-6 col-lg-6">
                  <label>COMPANY</label>
                  <input type="text" className='form-control shadow-none' name='company' value={state.company} onChange={handelChange} />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label>PRICE</label>
                  <input type="number" className='form-control shadow-none' name='price' value={state.price} onChange={handelChange} />
                </div>
              </div>
              <div className="row p-3 bg my-2 mb-4 rounded-3">
                <div className="col">
                  <div className="row mb-3">
                    <div className="col">
                      <label>Image</label>
                      <input type="file" className='form-control shadow-none' onChange={ImagehandelChange} />
                    </div>
                  </div>
                  {isuploading
                    ? <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar text-bg-warning" style={{ width: `${progress}%` }}>{progress}</div>
                    </div>
                    : ""
                  }
                </div>
              </div>
              <div className="row p-3 bg my-2 mb-4 rounded-3">
                <div className="col">
                  <label className="form-label">DETAILS</label>
                  <textarea className="form-control shadow-none" name='description' value={state.description} onChange={handelChange} rows="4"></textarea>
                </div>
              </div>
              <div className="row p-3 bg my-2 mb-4 rounded-3">
                <div className="col-12 col-md-6 col-lg-4">
                  <label>CATEGORY</label>
                  <input type="text" className='form-control shadow-none' name='category' value={state.category} onChange={handelChange} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <label>STOCK</label>
                  <input type="number" className='form-control shadow-none' name='stock' value={state.stock} onChange={handelChange} />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <label>REVIEWS</label>
                  <input type="number" className='form-control shadow-none' name='reviews' value={state.reviews} onChange={handelChange} />
                </div>
              </div>
              <div className="row p-3 bg my-2 mb-4 rounded-3">
                <div className="col text-center">
                  <button type='submit' onClick={handelSubmit} disabled={isuploadingtwo} className="text-white py-2 px-4 btn btn-danger">
                    {isuploadingtwo
                      ? <>
                        <div className="spinner-border text-light" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </>
                      : "Add Product"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div >
      </div >
    </>
  )
}

