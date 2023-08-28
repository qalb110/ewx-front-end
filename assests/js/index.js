function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    contact: document.getElementById("contact").value,
    course: document.getElementById("course").value,
    branch: document.getElementById("branch").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_19ttvee";
  const templateID = "template_kqm7qf8";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("course").value = "";
        document.getElementById("branch").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

