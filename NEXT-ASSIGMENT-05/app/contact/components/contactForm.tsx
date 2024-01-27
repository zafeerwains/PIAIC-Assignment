"use client"
import { useState } from "react"
import * as yup from "yup"
import DisplayContact from "./displayContact"
import { contactTypes, onChangeEventType } from "@/types/commonTypes"




export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    email: "",
    phone: 0,
    message: "",
    country: "",
    city: "",
    province: "",
    qualification: "",
    continent: "",
    landLine: 0,

  })

  const [errors, setError] = useState<string[]>([])

  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(5).max(10),
    email: yup.string().email().required(),
    message: yup.string().required(),
    country: yup.string().required().min(3),
    city: yup.string().required().min(3),
    province: yup.string().required().min(3),
    qualification: yup.string().required().min(3),
    continent: yup.string().required().min(3),
    landLine: yup.number().required().min(10),
  })

  const [contactList, setContactList] = useState<contactTypes[]>([])

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value
    }
    setContactInfo(userDetails)
  }


  const onClickHandler = async () => {
    try {
      const result = await contactInfoSchema.validate(contactInfo, { abortEarly: false })
      console.log(result);


      if (!result) {
        return
      }

      let newContactList: contactTypes[] = [...contactList, contactInfo]
      setContactList(newContactList)

      setError([])
      setContactInfo({
        name: "",
        email: "",
        phone: 0,
        message: "",
        country: "",
        city: "",
        province: "",
        qualification: "",
        continent: "",
        landLine: 0,
      })
    } catch (err: any) {

      setError(err.errors)
      let errorsObject: any = {}
      err.inner.forEach((err: any) => {
        errorsObject[err.path] = err.errors;
      });

      console.log(errorsObject);

      console.log("error", err.errors);


    }


  }

  // const getUserNameHandler = (event: onChangeEventType) => {
  //   console.log("getUserNameHandler call", event.target.value);
  //   // userName = event.target.value
  //   setUserName(event.target.value)

  // }

  // const onChangeEmailHandler = (e: onChangeEventType) => {
  //   setEmail(e.target.value)
  // }

  // var userName:string  = "defaut"
  // const [userName, setUserName] = useState<string>("")
  // const [email, setEmail] = useState<string>("")
  // const [text, setText] = useState<string>("")
  // const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      {/* <form className="max-w-md mx-auto"> */}
      <div className="mb-4">

        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          value={contactInfo.name}
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          value={contactInfo.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>
        <input
          value={contactInfo.phone}
          onChange={onChangeHandler}
          type="number"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          value={contactInfo.message}
          onChange={onChangeHandler}
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
        country
        </label>
        <input
          value={contactInfo.country}
          onChange={onChangeHandler}
          type="country"
          id="text"
          name="country"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
          city
        </label>
        <input
          value={contactInfo.city}
          onChange={onChangeHandler}
          type="text"
          id="city"
          name="city"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="province" className="block text-gray-700 text-sm font-bold mb-2">
          province
        </label>
        <input
          value={contactInfo.province}
          onChange={onChangeHandler}
          type="text"
          id="province"
          name="province"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="qualification" className="block text-gray-700 text-sm font-bold mb-2">
          qualification
        </label>
        <input
          value={contactInfo.qualification}
          onChange={onChangeHandler}
          type="text"
          id="qualification"
          name="qualification"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="continent" className="block text-gray-700 text-sm font-bold mb-2">
          continent
        </label>
        <input
          value={contactInfo.continent}
          onChange={onChangeHandler}
          type="text"
          id="continent"
          name="continent"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="landLine" className="block text-gray-700 text-sm font-bold mb-2">
          landLine
        </label>
        <input
          value={contactInfo.landLine}
          onChange={onChangeHandler}
          type="number"
          id="landLine"
          name="landLine"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      
      {errors.map((item, index) => {
        return (
          <div key={index} style={{ color: "red" }}>
            <h1>{item}</h1>
          </div>
        )
      })}
      <div className="mb-6">
        <button
          onClick={onClickHandler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      {/* </form> */}
      <DisplayContact contactData={contactList} />
    </>
  )
}
