const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const mainEv = window.defferedPrompt;

    if(!mainEv) {
        return;
    }

    mainEv.prompt();

    window.defferedPrompt = null;
    butInstall.classList.toggle('hidden', true); 
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt = null; 
});
