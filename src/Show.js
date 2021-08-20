import { useState, useEffect } from "react";
import "./Show.css"
import axios from "axios";
import emailsvg from "./assets/email.svg"
import phonesvg from "./assets/phone.svg"
import locationsvg from "./assets/location.svg"

const Show = () => {

const [titlename, settitlename] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [picture, setpicture] = useState();
  const [email, setemail] = useState();
  const [phone, setPhone] = useState();
  const [state, setstate] = useState();
  const [Country, setCountry] = useState()
  const [Age, setAge] = useState();
  const [regDate, setregDate] = useState("");
  const [change, setchange] = useState(true);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res) => {
      const { name, picture, email, phone, location, registered } = res.data.results[0];
      settitlename(name.title);
      setfirstname(name.first);
      setlastname(name.last);
      setpicture(picture.medium);
      setemail(email);
      setPhone(phone);
      setstate(location.state);
      setCountry(location.country);
      setAge(registered.age)
      setregDate(registered.date)

    });
  }, [change]);

  const changePerson = () => {
    setchange(!change);
    console.log(change);
  };

  return (
    <div className="App">
       <div className="container">
        <div className="item left">
          <img src={picture} alt={picture} />
        </div>
        <div className="item right name">
          {titlename} {firstname} {lastname}
        </div>
        <div className="item left email"><img src={emailsvg} alt="email" /></div>
        <div className="item right">{email}</div>
        <div className="item left phone"><img src={phonesvg} alt="" /></div>
        <div className="item right">{phone}</div>
        <div className="item left location"><img src={locationsvg} alt="" /></div>
        <div className="item right">{state}-{Country}</div>
        <div className="bottom">Age: {Age}</div>
        <div className="bottom">Register Date : {regDate.slice(0, 10)}</div>
      </div>

      <button onClick={changePerson}>Change Person</button>
      
      
    </div>
  );
};

export default Show;
