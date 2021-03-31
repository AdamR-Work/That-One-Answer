
// ADD STEP
async function addStepsFormHandler(event) {
    event.preventDefault();
  
    const step_text = document.querySelector('#new-step').value.trim();
    const answer_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log(step_text + " -- " + answer_id);
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
        // document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
    console.log('made it here');
}

  // ADD COMMENT
  // async function addCommentsFormHandler(event) {
  //   event.preventDefault();
  
  //   const comment_text = document.querySelector('textarea[name="new-comment"]').value.trim();
  //   const answer_id = window.location.toString().split('/')[
  //     window.location.toString().split('/').length - 1
  //   ];
  
  //   if (comment_text) {
  //     const response = await fetch('/api/comment', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         comment_text,
  //         steps_id,
  //         answer_id
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  
  //     if (response.ok) {
  //       document.location.reload();
  //     } else {
  //       alert(response.statusText);
  //     }
  //   }
  // }
  
  // document.querySelector('.new-comment').addEventListener('commit-comment', addCommentsFormHandler);
  
  document.querySelector('#new-step-btn').addEventListener('submit', addStepsFormHandler);