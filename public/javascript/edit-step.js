async function editStepFormHandler(event) {
    event.preventdefault();

    const step_text = document.querySelector('textarea[name="step-body"]').value.trim();
    const answer_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const reponse = await fetch(`/api/answer/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            step_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response,ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-step-form').addEventListener('submit', editStepFormHandler);