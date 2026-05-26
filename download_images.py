import urllib.request
import os

images = {
    'images/hero/hero-bg.png': 'https://www.industriasgustossi.com.bo/wp-content/uploads/2020/11/DSC_00026-40356-original-protected-1600x900-1-1590x1462.jpeg',
    'images/productos/prod1.png': 'https://www.industriasgustossi.com.bo/wp-content/uploads/2022/04/Paneton-Chocolate-Caja.jpg',
    'images/productos/prod2.png': 'https://www.industriasgustossi.com.bo/wp-content/uploads/2022/04/Paneton-Tradicional-Caja1.jpg',
    'images/productos/prod3.png': 'https://www.industriasgustossi.com.bo/wp-content/uploads/2022/04/Rosca-Navide%C3%B1a-Bolsa.jpg',
    'images/productos/prod4.png': 'https://www.industriasgustossi.com.bo/wp-content/uploads/2022/04/Bandeja-Chip-de-chocolate.jpg',
    'images/productos/prod5.png': 'https://www.industriasgustossi.com.bo/wp-content/uploads/2022/04/bandeja-hojaldre.jpg',
    'images/productos/prod6.png': 'https://www.industriasgustossi.com.bo/wp-content/uploads/2022/04/Galleta-de-Almendra1.jpg',
    'images/categorias/cat1.png': 'https://www.industriasgustossi.com.bo/wp-content/uploads/2022/04/Bandeja-Choco-Naranja.jpg',
    'images/categorias/cat2.png': 'https://www.industriasgustossi.com.bo/wp-content/uploads/2022/04/Productos-Coco.jpg'
}

for local_path, url in images.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded {local_path}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")
