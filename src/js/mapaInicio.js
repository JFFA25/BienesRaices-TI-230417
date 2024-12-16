// Finalizando cambios
(function () {
    const lat = 20.2738500;
    const lng = -97.9603964;
    const mapa = L.map('mapa-inicio').setView([lat, lng], 13);

    let markers = new L.FeatureGroup().addTo(mapa);
    let propiedades = [];
    
    // Filtros
    const filtros = {
        categoria: '',
        precio: ''
    };

    const categoriasSelect = document.querySelector('#categorias');
    const preciosSelect = document.querySelector('#precios');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // Filtrado de categorias y precios
    categoriasSelect.addEventListener('change', e => {
        filtros.categoria = parseInt(e.target.value) || ''; // Conversión explícita
        filtrarPropiedades();
    });

    preciosSelect.addEventListener('change', e => {
        filtros.precio = parseInt(e.target.value) || '';
        filtrarPropiedades();
    });

    const obtenerPropiedades = async () => {
        try {
            const url = '/api/propiedades';
            const respuesta = await fetch(url);
            propiedades = await respuesta.json();

            mostrarPropiedades(propiedades);
        } catch (error) {
            console.error("Error al obtener propiedades:", error);
        }
    };

    const mostrarPropiedades = propiedades => {
        // Limpiar markers previos
        markers.clearLayers();

        propiedades.forEach(propiedad => {
            if (!propiedad?.lat || !propiedad?.lng) return; // Validar existencia

            const marker = new L.marker([propiedad.lat, propiedad.lng], {
                autoPan: true
            })
                .addTo(mapa)
                .bindPopup(`
                    <p class="text-indigo-600 font-bold">${propiedad?.categoria?.nombre || 'Sin categoría'}</p>
                    <h1 class="text-xl font-extrabold uppercase my-5">${propiedad?.titulo || 'Título no disponible'}</h1>
                    <img src="/uploads/${propiedad?.imagen || 'default.jpg'}" alt="Imagen de la propiedad ${propiedad?.titulo || ''}">
                    <p class="text-gray-600 font-bold">${propiedad?.precio?.nombre || 'Sin precio'}</p>
                    <a href="/propiedad/${propiedad?.id}" class="bg-indigo-600 block p-2 text-center font-bold uppercase">Ver Propiedad</a>
                `);

            markers.addLayer(marker);
        });
    };

    const filtrarPropiedades = () => {
        const resultado = propiedades
            .filter(filtrarCategoria)
            .filter(filtrarPrecio);
        mostrarPropiedades(resultado);
    };

    const filtrarCategoria = (propiedad) => {
        return filtros.categoria ? propiedad.categoriaID === filtros.categoria : true;
    };

    const filtrarPrecio = (propiedad) => {
        return filtros.precio ? propiedad.precioID === filtros.precio : true;
    };

    obtenerPropiedades();

})();
