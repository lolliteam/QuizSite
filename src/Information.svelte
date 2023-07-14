<script>
    import { startQuiz }  from './store.js'

    function validate() {
        startQuiz.update((val)=> true);
    }
</script>

<style>
    input {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        letter-spacing: 1.4px;
    }

    .container {
        flex: 0 1 700px;
        padding: 10px;
        width: 30%;
    }

    .app-form-group {
        margin-bottom: 15px;
    }

    .app-form-control {
        width: 100%;
        padding: 10px 0;
        background: none;
        border: none;
        border-bottom: 1px solid #666;
        color: #000000;
        font-size: 14px;
        text-transform: uppercase;
        outline: none;
        transition: border-color .2s;
    }

    .app-form-control::placeholder {
        color: #666;
    }

    .app-form-control:focus {
        border-bottom-color: #ddd;
    }

    .app-form-group.buttons {
        margin-bottom: 0;
        text-align: right;
    }

    .app-form-button {
        background: none;
        border: none;
        color: #040404;
        font-size: 14px;
        cursor: pointer;
        outline: none;
    }

    .app-form-button:hover {
     color: #b9134f;
    }

</style>

<div class="container">
    <div class="app-form">
        <div class="app-form-group">
            <input class="app-form-control" type="text" placeholder="First Name" required>
        </div>
        <div class="app-form-group">
            <input class="app-form-control" type="text" placeholder="Last Name" required>
        </div>
        <div class="app-form-group">
            <input class="app-form-control" type="email" placeholder="Email" required>
        </div>
        <div class="app-form-group buttons">
            <button class="app-form-button" on:click={validate}>Start Quiz</button>
          </div>
    </div>
</div>
  