// let upload = document.getElementById('upload');
// upload.addEventListener('change', () => {
//     let fr = new FileReader();
//     fr.readAsText(upload.files[0]);
//     fr.onload = function(){

//         let Arr = fr.result.split(/\r?\n|\n/).map(e => {
//             return e.split(',');
//         });
//         Window.valNo = 0;
//         let invalNo = 0;
//         Window.valMail = [];
//         Arr.forEach(e =>{
//             let em = String(e);
//             let m = e.map(e => {
//                 return `<td>${e}</td>`; 

//             })
//             let creEle = document.createElement("tr");
//             creEle.innerHTML = m;
//             if(em != ""){
//                 if(em.chatAy(em.length - 4) == '.'){
//                     document.querySelector("table#val").appendChild(creEle);
//                     Window.valMail.push(em);
//                     Window.valNo = window.valNo + 1;
//                     return false;
//                 }
//                 else if (em.charAt(em.length - 3) == '.'){
//                     document.querySelector("table#val").appendChild(creEle);
//                     Window.valMail.push(em);
//                     Window.valNo = Window.valNo + 1;
//                     return false;
//                 }
//                 else{
//                     document.querySelector("table#inval").appendChild(creEle);
//                     invalNo = invalNo + 1;
//                     return false;
//                 }
//             }
//         });
//         document.querySelector('#valCount').innerHTML = Window.valNo;
//         document.querySelector('#invalCount').innerHTML = invalNo;
//     };
// });


//Email Validation

const upload = document.getElementById('upload');
upload.addEventListener('change', () => {
  const fr = new FileReader();
  fr.readAsText(upload.files[0]);
  fr.onload = function() {
    const content = fr.result;
    const lines = content.split(/\r?\n/);
    let valNo = 0;
    let invalNo = 0;
    const valMail = [];

    lines.forEach(line => {
      if (line.trim() !== '') {
        const email = line.trim();
        const creEle = document.createElement("tr");
        const emailCell = `<td class='emaillist'>${email}</td>`;
        creEle.innerHTML = emailCell;

        // const isValidEmail = /^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/.test(email);
        // if (isValidEmail) {
        //   document.querySelector("table#val").appendChild(creEle);
        //   valMail.push(email);
        //   valNo++;
        // } else {
        //   document.querySelector("table#inval").appendChild(creEle);
        //   invalNo++;
        // }
        if (email.charAt(email.length - 4) == '.' || email.charAt(email.length - 3) == '.') {
            document.querySelector("table#val").appendChild(creEle);
            valMail.push(email);
            valNo++;
            // return false;
          } 
          else {
            document.querySelector("table#inval").appendChild(creEle);
            invalNo++;
          }
      }
    });

    document.querySelector('#valCount').textContent = valNo;
    document.querySelector('#invalCount').textContent = invalNo;
  };
});



//Sending Mails

function sendEmail() {
    Email.send({
        Host:"smtp.alasticemail.com",
        Username: "novaneel2802@gmail.com",
        Password: "ABCDabcd1234",
        To:"novaneel2002@gmail.com",
        From:"novaneel2802@gmail.com",
        Subject: document.querySelector('#subject').ariaValueMax,
        Body: document.getElementById('msg').value    
    }).then(
        message => alert(Window.valNo + "mails has been sent successfully!!\n" + message + "\n Press OK to continue")

    );
    console.log(document.getElementById('msg').value);
    console.log(document.getElementById('msg').innerHTML);
    console.log(document.getElementById('msg').innerText);
}




