// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ daftarKontak }) => {
  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {daftarKontak?.map((daftar) => (
        <div
        key={daftar["name"]}
          style={{
            backgroundColor: "blueviolet",
            width: "500px",
            padding: "15px 20px",
            display: "flex",
            marginBottom:"30px",
            borderRadius:"10px"
          }}
        >
          <div style={{ display: "flex", gap: "15px", flex: "1" }}>
            <img
              src={daftar["photo"]}
              style={{ height: "150px", width: "100%", borderRadius: "50%" }}
            />
          </div>

          <div style={{flex:"2"}}>
            <h1>{daftar["name"]}</h1>
            <p>{daftar["phone"]}</p>
            <p>{daftar["email"]}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Contact;
