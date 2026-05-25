// URL de la API (misma base)
const API_BASE = '/api';

// Estado global
let productos = [];
let categorias = [];

document.addEventListener('DOMContentLoaded', () => {
    cargarCategorias();
    cargarProductos();

    // Buscador
    document.getElementById('search-input').addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(termino));
        renderizarTabla(filtrados);
    });

    // Formulario
    document.getElementById('productForm').addEventListener('submit', guardarProducto);
});

async function cargarCategorias() {
    try {
        const res = await fetch(`${API_BASE}/categorias`);
        categorias = await res.json();
        
        const select = document.getElementById('prod-categoria');
        select.innerHTML = '<option value="">Seleccione una categoría</option>';
        
        categorias.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.slug;
            option.textContent = cat.nombre;
            select.appendChild(option);
        });
    } catch (e) {
        console.error("Error cargando categorías:", e);
    }
}

async function cargarProductos() {
    try {
        const res = await fetch(`${API_BASE}/productos`);
        productos = await res.json();
        renderizarTabla(productos);
    } catch (e) {
        console.error("Error cargando productos:", e);
    }
}

function renderizarTabla(lista) {
    const tbody = document.getElementById('products-table-body');
    tbody.innerHTML = '';

    if (lista.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">No hay productos encontrados.</td></tr>';
        return;
    }

    lista.forEach(p => {
        const tr = document.createElement('tr');
        
        // Imagen placeholder si no hay
        const imgUrl = p.imagen ? p.imagen : 'images/icons/logo-color.png';
        const destacadoBadge = p.destacado ? 
            '<span class="badge badge-destacado">★ Destacado</span>' : 
            '<span class="badge badge-normal">Normal</span>';

        tr.innerHTML = `
            <td>#${p.id}</td>
            <td><img src="${imgUrl}" alt="${p.nombre}" class="prod-img-thumb" onerror="this.src='images/icons/logo-color.png'"></td>
            <td><strong>${p.nombre}</strong></td>
            <td>${p.categoria_nombre || p.categoria_slug}</td>
            <td>${destacadoBadge}</td>
            <td>
                <button class="btn btn-sm btn-edit" onclick="editarProducto(${p.id})">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${p.id}, '${p.nombre}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

/* ── MODAL Y FORMULARIO ── */

function openModal(modo, productoId = null) {
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');
    const title = document.getElementById('modal-title');
    
    form.reset();
    document.getElementById('prod-id').value = '';
    document.getElementById('prod-imagen-base64').value = '';
    document.getElementById('img-preview').style.display = 'none';
    document.getElementById('img-preview').src = '';

    if (modo === 'add') {
        title.textContent = 'Agregar Producto';
    } else if (modo === 'edit') {
        title.textContent = 'Editar Producto';
        const p = productos.find(x => x.id === productoId);
        if (p) {
            document.getElementById('prod-id').value = p.id;
            document.getElementById('prod-nombre').value = p.nombre;
            document.getElementById('prod-categoria').value = p.categoria_slug;
            document.getElementById('prod-destacado').checked = p.destacado == 1;
            document.getElementById('prod-imagen').value = p.imagen || '';
            if (p.imagen) {
                document.getElementById('img-preview').src = p.imagen;
                document.getElementById('img-preview').style.display = 'block';
            }
        }
    }
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

async function guardarProducto(e) {
    e.preventDefault();
    
    const id = document.getElementById('prod-id').value;
    const datos = {
        nombre: document.getElementById('prod-nombre').value,
        categoria_slug: document.getElementById('prod-categoria').value,
        precio: 0,
        destacado: document.getElementById('prod-destacado').checked ? 1 : 0,
        imagen: document.getElementById('prod-imagen').value,
        imagen_base64: document.getElementById('prod-imagen-base64').value
    };

    try {
        let res;
        if (id) {
            // Editar (PUT)
            res = await fetch(`${API_BASE}/producto/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });
        } else {
            // Crear (POST)
            res = await fetch(`${API_BASE}/producto`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(datos)
            });
        }

        const result = await res.json();
        if (result.success) {
            closeModal();
            cargarProductos(); // Recargar la tabla
        } else {
            alert('Error al guardar el producto.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al comunicarse con el servidor.');
    }
}

async function eliminarProducto(id, nombre) {
    if (confirm(`¿Estás seguro de que deseas eliminar el producto "${nombre}"?\nEsta acción no se puede deshacer.`)) {
        try {
            const res = await fetch(`${API_BASE}/producto/${id}`, {
                method: 'DELETE'
            });
            const result = await res.json();
            if (result.success) {
                cargarProductos(); // Recargar tabla
            } else {
                alert('Error al eliminar.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar eliminar.');
        }
    }
}

/* ── PREVIEW DE IMAGEN A BASE64 ── */
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('img-preview');
            preview.src = e.target.result;
            preview.style.display = 'block';
            
            // Guardar base64 en hidden input para enviarlo
            document.getElementById('prod-imagen-base64').value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
