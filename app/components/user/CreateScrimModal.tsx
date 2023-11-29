const CreateScrimModal = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden pt-4 z-30">
      <ModalContent />
    </div>
  );
};

const ModalContent = () => {
  return (
    <div className="h-screen rounded-t-xl border border-primary-dark shadow-md bg-background">
      <p>this is the scrim modal</p>
    </div>
  );
};

export { CreateScrimModal };
