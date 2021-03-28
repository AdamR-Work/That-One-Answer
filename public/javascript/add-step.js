// add step
async function addStepsFormHandler(event) {
    event.preventDefault();
  
    const step_text = document.querySelector('textarea[name="step-text"]').value.trim();
    const answer_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (step_text) {
      const response = await fetch('/api/step', {
        method: 'POST',
        body: JSON.stringify({
          answer_id,
          step_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  // add comment
  document.querySelector('.step-form').addEventListener('submit', addStepsFormHandler);
  async function addStepsFormHandler(event) {
    event.preventDefault();
  
    const step_text = document.querySelector('textarea[name="step-text"]').value.trim();
    const answer_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (step_text) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          step_id,
          step_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.step-form').addEventListener('submit', addStepsFormHandler);