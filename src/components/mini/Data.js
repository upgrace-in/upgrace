import {useState} from 'react'

export default function Data() {

    const data = ''

    fetch("https://files.upgrace.in/data.json").then(res => {
        data = res.json()
        return data
    }).catch(console.log);

}