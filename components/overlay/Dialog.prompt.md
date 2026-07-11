Modal dialog (charcoal blurred scrim, silver-rimmed panel).

```jsx
{open && (
  <Dialog title="Get the ebook" onClose={() => setOpen(false)}
    footer={<><Button variant="ghost" onClick={close}>Not now</Button><Button>Continue</Button></>}>
    …content…
  </Dialog>
)}
```
