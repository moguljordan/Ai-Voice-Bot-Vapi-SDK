import Vapi from '@vapi-ai/web';

const vapi = new Vapi('8993f2ed-1cfa-433d-9aff-a97297901f304');

const startCallButton = document.getElementById('start-call');
const stopCallButton = document.getElementById('stop-call');

startCallButton.addEventListener('click', async () => {
  await vapi.start('a2917ad3-841e-4ea3-b634-f5e0bd8272dbd');
});

stopCallButton.addEventListener('click', async () => {
  await vapi.stop();
});

vapi.on('call-start', () => {
  // Update UI to show that the call has started
});

vapi.on('call-end', () => {
  // Update UI to show that the call has ended
});

vapi.on('speech-start', () => {
  // Update UI to show that the assistant is speaking
});

vapi.on('speech-end', () => {
  // Update UI to show that the assistant is done speaking
});

vapi.on("message", (msg) => {
  if (msg.type !== "transcript") return;

  if (msg.transcriptType === "partial") {
    // Update UI to show the live partial transcript
  }

  if (msg.transcriptType === "final") {
    // Update UI to show the final transcript
  }

  if (msg.type === "function-call") {
    if (msg.functionCall.name === "addTopping") {
      const topping = msg.functionCall.parameters.topping;
      // Add the topping to the pizza
    }

    if (msg.functionCall.name === "goToCheckout") {
      // Redirect the user to checkout
    }
  }
});
