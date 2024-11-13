<?php 

class About extends Controller {

    public function index($nama= 'Raihan', $pekerjaan = 'Programmer',$umur = '22') {
        $data['nama'] = $nama;
        $data['pekerjaan'] = $pekerjaan;
        $data['umur'] = $umur;
        $data['judul'] = 'About';
        $this->view('template/header',$data);
        $this->view('about/index',$data);
        $this->view('template/footer');
    }
    public function page(){
        $data['judul'] = 'Page';
        $this->view('template/header',$data);
        $this->view('template/header');
        $this->view('about/page');
        $this->view('template/footer');
    }
}