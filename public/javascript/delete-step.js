
const wrapper = document.getElementById('wrapper');

async function removeStep(event){
  event.preventDefault()

  const pingInfo = event.target.id
  console.log(pingInfo)
  
    if (isNaN(pingInfo)) {
      return;
    }
    else{

      const response = await fetch(`/api/step/`+pingInfo, {
              method: 'DELETE'
            });
            if(response.ok){
              document.location.reload();
            }else{
                alert(response.statusText)
              }
    }
  }
wrapper.addEventListener('click', removeStep);
