import data from './mini/data.json'
import { useEffect, useRef, useState } from 'react'

import { firestore } from './fire'
import { collection, doc, setDoc } from '@firebase/firestore'

import { storage } from './fire'
import { ref, uploadBytes, listAll, getDownloadURL } from '@firebase/storage'


export default function Add() {
    const fileRef = useRef()
    const linkRef = useRef()
    const groupRef = useRef()
    const [groups, setGroups] = useState("")
    const textref = collection(firestore, "W3")

    const [imgUpload, setimgUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, "images/")
    

    function updateCards() {
        let st = ''
        let d = data[0]['data'];
        for (let j = 0; j < d.length; j++) {
            st = st + d[j]["code"] + ', '
            console.log(d)
        }
        setGroups(st)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        let data = {
            fileRef: fileRef.current.value.split('\\')[2],
            linkRef: linkRef.current.value,
            groupRef: groupRef.current.value,
        }

        try {
            setDoc(doc(textref), data)
            uploadImage()
        } catch (e) {
            console.log(e)
        }
    }

    const uploadImage = () => {
        if(imgUpload == null) return;
        const imageRef = ref(storage,  `images/${imgUpload.name}`)
        uploadBytes(imageRef, imgUpload).then(() => {
            alert("Image uploaded")
        })
    }

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
            console.log(imageList)
        })
    }, [])

    return (
        <div className="col-md-6 mx-auto text-center" style={{ paddingTop: 200 + 'px' }}>
            <h1>Add Samples</h1>
            <p>
                Groups: <b>{groups}</b>
            </p>
            <br />
            <form onSubmit={handleSave}>

                <div className="form-group">
                    <input type="text" required ref={groupRef} className="form-control" placeholder="Group ID" />
                </div>

                <div className="form-group">
                    <input type="file" onChange={(e) => {setimgUpload(e.target.files[0])}} ref={fileRef} className="form-control" placeholder="Select any image" />
                </div>

                <div className="form-group">
                    <input type="url" required ref={linkRef} className="form-control" placeholder="Enter Link" />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">ADD</button>
                </div>

            </form>
        </div>
    )
}