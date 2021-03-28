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
  async function addCommentsFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="new-comment"]').value.trim();
    const answer_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/step', {
        method: 'POST',
        body: JSON.stringify({
          comment_text,
          steps_id,
          answer_id
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
  
  // document.querySelector('.new-comment').addEventListener('commit-comment', addCommentsFormHandler);
  
  document.querySelector('.step-form').addEventListener('submit', addStepsFormHandler);