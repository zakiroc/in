
  let body = document.querySelector('body')
  let oclock = document.createElement('p')
 

  oclock.style.fontSize = '36px'
  oclock.style.textAlign = 'center'
  oclock.style.marginTop = '200px'

  setInterval(()=>{
    let time = new Date ()
    let hour = time.getHours()
    let minutes = time.getMinutes()
    let second = time.getSeconds()
    oclock.innerHTML = `${hour}  : ${minutes>10 ? minutes : '10' + minutes} : ${second>10 ? second : '0' + second}`
  },1000)
  body.appendChild (oclock)


