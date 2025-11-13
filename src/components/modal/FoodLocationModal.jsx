const FoodLocationModal = ({ location, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-3xl p-4 relative">
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            location
          )}&output=embed`}
        ></iframe>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-3 py-1 cursor-pointer"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default FoodLocationModal;
