AYNAA - Portal de Analítica para microempresas multicanal
Versión: MVP estático

CONTENIDO
- index.html: página principal del sistema.
- styles.css: diseño visual del sitio.
- app.js: lógica del dashboard, carga CSV, filtros y reporte.
- datos_demo.csv: archivo de ejemplo para probar la carga.

CÓMO ABRIRLO
1. Descomprime el archivo ZIP.
2. Abre index.html con Google Chrome, Microsoft Edge o Firefox.
3. El sitio funciona sin instalar nada.

CÓMO PROBAR LA CARGA CSV
1. Entra a la sección "Cargar datos".
2. Descarga o usa el archivo datos_demo.csv.
3. Cárgalo desde el botón de archivo.
4. El dashboard se actualizará automáticamente.

COLUMNAS NECESARIAS DEL CSV
fecha, canal, producto, cliente, cantidad, precio_unitario, costo_unitario

NOTA
Esta versión es un prototipo MVP para demostrar la viabilidad del proyecto.
No usa servidor ni base de datos real; guarda los datos en el navegador mediante localStorage.
Para una versión profesional se recomienda migrar a Flask/Django/Node.js con base de datos MySQL, PostgreSQL o Firebase.
