import { contactTypes } from "@/types/commonTypes";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>

      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>country</th>
            <th>country</th>
            <th>province</th>
            <th>qualification</th>
            <th>landLine</th>
            <th>landLine</th>
          </tr>
          {props.contactData.map((item, index) => {
            return (
              <tr  key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
                <td>{item.country}</td>
                <td>{item.city}</td>
                <td>{item.province}</td>
                <td>{item.qualification}</td>
                <td>{item.qualification}</td>
                <td>{item.landLine}</td>
        
              </tr>
            )
          })}

        </table>
      </div>

    </div>
  )
}
