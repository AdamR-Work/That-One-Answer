async function addStepsFormHandler(event) {
    event.preventDefault();
  
    const step_text = document.querySelector('textarea[name="step-body"]').value.trim();
    const answer_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (step_text) {
      const response = await fetch('/api/answer', {
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
  
  document.querySelector('.step-form').addEventListener('submit', addStepsFormHandler);