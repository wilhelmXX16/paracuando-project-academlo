const Forms = () => {
  return (
    <div className="p-5">
      <h1 className="text-app-blackLight app-title-2">Publicación</h1>
      <samp className="text-app-grayDark app-subtitle-2">
        Información básica
      </samp>
      <form className="pt-4 flex flex-col gap-2">
        <label className="flex flex-col">
          <span className=" text-app-grayDark ">Titulo de publicación</span>
        </label>
        <input className="border border-app-grayDark rounded-md" type="text" />

        <div className="flex flex-row gap-3">
          <label className="py-2">
            <select
              name="tipo"
              className="border border-app-grayDark rounded-md w-[300px]"
            >
              <option>Tipo</option>
              <option>Marcas y tiendas</option>
              <option>Artistas y conciertos</option>
              <option>Torneos</option>
            </select>
          </label>

          <label className="py-2 ">
            <select
              name="tipo"
              className="border border-app-grayDark rounded-md w-[300px]"
            >
              <option>Categoria</option>
              <option>Ropa y accesorios</option>
              <option>Deportes</option>
              <option>Conciertos</option>
              <option>Deportes</option>
              <option>Meet & Greet</option>
              <option>E-sports</option>
              <option>Pop - Rock</option>
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-1">
          <span className="">¿Por qué lo recomiendas?</span>
          <input
            className="border border-app-grayDark rounded-md"
            type="text"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="">Link de referencia</span>
          <textarea className="p-4 border border-app-grayDark rounded-md" />
        </label>
      </form>
    </div>
  );
};

export default Forms;
