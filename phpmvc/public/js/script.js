$(function(){

    // ini buat tambah data
    $('.tombolTambahData').on('click',function(){  //ini jquery buat onClick, jangan lupa kalo class pake titik didepannya
        $('#judulModal').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('#nama').val('');
        $('#npm').val('');
        $('#email').val('');
        $('#jurusan').val('');
        $('#id').val('');

    })

    // ini buat ubah data
    $('.tampilModalUbah').on('click',function(){  //ini jquery buat onClick, jangan lupa kalo class pake titik didepannya
        $('#judulModal').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action','http://localhost/phpmvc/public/mahasiswa/ubah')

        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost/phpmvc/public/mahasiswa/getUbah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#npm').val(data.npm);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
                
            }
        })
    })
})