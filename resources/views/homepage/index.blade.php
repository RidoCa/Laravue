
@extends('layouts.app')

@section('content')
<div class="container">
    <div class="jumbotron" id="jumbotron_index">
    <div class="text-center">
      <h1 id="x">Teluk Coding</h1>
      <p id="x">CRUD Application Laravel and Vue.js</p>
    </div>

      <router-view></router-view>

</div>
</div>
@endsection
