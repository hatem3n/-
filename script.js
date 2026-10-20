
document.getElementById('year')?.append(String(new Date().getFullYear()));
document.getElementById('contactForm')?.addEventListener('submit',function(e){e.preventDefault();document.getElementById('formNotice').style.display='block';this.reset();});
document.getElementById('loginForm')?.addEventListener('submit',function(e){e.preventDefault();document.getElementById('loginNotice').style.display='block';});
