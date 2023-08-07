<script>
    import {blur} from "svelte/transition";
    import Question from "./Quiz/Question.svelte"
    import Modal from "./Modal.svelte"
    import { onMount} from 'svelte'
    import {score, startQuiz } from './store.js'
    import Information from "./Quiz/Information.svelte"
    import FakeTable from "./Quiz/FakeTable.svelte";

    let activeQuestion = 0;
    let isModalOpen = false;
    let result = "";
    let resultMsg = "";

	let quiz = getQuiz();
	async function getQuiz(){
		const res = await fetch('https://opentdb.com/api.php?amount=4')
		const quiz = await res.json();
        return quiz
	}

    function nextQuestion(){
        activeQuestion = activeQuestion + 1;
    }

    function resetQuiz(){
        score.set(0);
        activeQuestion = 0;
        quiz = getQuiz()
        isModalOpen = false;
    }

    function forceSubmit() {
        //document.querySelector('#submitForm').click();
        return true;
    }

    $: actualNumber = activeQuestion +1;

    $: if ($score >= 3 && actualNumber > 4){
        isModalOpen = true;
        result = "You Won!"
        resultMsg = "Congratulation"
        forceSubmit();
    }

    $: if ($score < 3 && actualNumber > 4){
        isModalOpen = true;
        result = "You Lost!"
        resultMsg = "Better luck next time"
        forceSubmit();
    }

    $: if (activeQuestion > 4){
        resetQuiz();
    }

</script>
<style>
    .fade-wrapper {
        position: absolute;
    }
</style>

<h1>Triglav Test Quiz</h1>

<div>
    {#if !$startQuiz}
        <Information/>
    {:else}
        <button on:click={resetQuiz}>Start New Quiz</button>
        <h3>My Score: {$score}</h3>
        {#if actualNumber < 5}
            <h4>Question #{actualNumber}</h4>
        {/if}

        {#await quiz}
            loading...
        {:then data}
            {#each data.results as question, index}
                {#if index == activeQuestion}
                    <div transition:blur={{amount:10}} class="fade-wrapper">
                        <Question {nextQuestion} {question}/>
                    </div>
                {/if}  
            {/each}
        {/await}
    {/if}

</div>
{#if isModalOpen}
<Modal on:close={resetQuiz}>
    <h2>{result}!</h2>
    <p>{resultMsg}!</p>
    <button on:click={resetQuiz}>Start Over</button>
</Modal>
{/if}

<!-- <FakeTable /> -->
