function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState === 4 && xhr.status == "200"){
    callback(xhr.responseText);
  }
};
xhr.send();
}
getfile("data.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.careerobjective);
})
var child = document.querySelector(".childone");
function details(det) {
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);
  var name = document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);
  var phoneno = document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);
  var mail = document.createElement("a");
  mail.href = "mailto:raasisuragam@gmail.com";
  mail.textContent = det.email;
  child.appendChild(mail);
  var add = document.createElement("h3")
  add.textContent = "address";
  child.appendChild(add);
  var u = document.createElement("hr");
  child.appendChild(u);
  var address = document.createElement("h3");
  address.textContent = det.address;
  child.appendChild(address);
}
var child2 = document.querySelector(".childtwo");
function career(careerinfo)
{
  var head = document.createElement("h3");
  head.textContent = "careerobjective";
  child2.appendChild(head);
  var u1 = document.createElement("hr");
  child2.appendChild(u1);
  var info = document.createElement("h3");
  info.textContent = careerinfo.info;
  child2.appendChild(info);
}
