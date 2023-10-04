<div class="card">
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">ID</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">CORREO</th>
            <th scope="col">FECHA REGISTRO</th>
            <th scope="col">HORA REGISTRO</th>
            </tr>
        </thead>
        <?php foreach($conex->query("SELECT * from datos " )  as $row ){?>
            <tr>
        <tbody>
        <tr>
        <td><?php echo $row["id"]?></td>
                <td><?php echo $row["nombre"]?></td>
                <td><?php echo $row["email"]?></td>
                <td><?php echo $row["fecha_registro"]?></td>
                <td><?php echo $row["hora"]?></td>
            </tr>
        </tbody>
        <?php }?>
    </table>
</div>
