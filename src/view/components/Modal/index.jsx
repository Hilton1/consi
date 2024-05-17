export function Modal({ speaker, onClose }) {
  const handleClickOutside = (event) => {
    if (event.target.id === 'modal-background') {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleClickOutside}
    >
      <div
        className="bg-white p-5 rounded-lg max-w-xl w-full z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <img src={speaker.img} alt={speaker.name} className="" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />

          <div className="flex flex-col items-start">
            <p className="font-poppins text-justify font-bold text-xl underline">{speaker.tipo_atracao}</p>
            <h2 className="font-poppins text-justify font-bold text-lg mb-3">{speaker.name}</h2>
            {speaker.tema && (
              <div className="text-justify">
                <p><strong>Tema:</strong></p>
                <p>{speaker.tema}</p>
              </div>
            )}

            {speaker.area_atuacao && (
              <div className="text-justify mt-2">
                <p className="text-left"><strong>Área de atuação:</strong></p>
                <p>{speaker.area_atuacao}</p>
              </div>
            )}
          </div>
        </div>

        {/* <button onClick={onClose} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Fechar</button> */}
      </div>
    </div>
  );
}
