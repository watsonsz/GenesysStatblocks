<script lang="ts">
  export let attributes: Record<string, number>;
  export let derived: Record<string, number>;
  import type {Entry} from './StatBlock'
  import {bg} from './StatBlock'
  // export let name:string;
  // export let type:string;
  export let skills: Entry[] = [];
  export let talents: Entry[] = [];
  export let abilities: Entry[] = [];
  export let equipment: Entry[] = [];
</script>

<div class="statblock-wrapper">
  <!-- <div class="header">
    {name}<span class="type">({type})</span>
  </div> -->
  <img src={bg} alt="Statblock background" class="statblock-bg" />
  <!-- Derived attributes -->
  <div class="derived soak">{derived.soak_value}</div>
  <div class="derived wounds">{derived.wound_threshold}</div>
  <div class="derived strain">{derived.strain_threshold}</div>
  <div class="derived defense-ranged">{derived.ranged_defence}</div>
  <div class="derived defense-melee">{derived.melee_defense}</div>

  <!-- Characteristics -->
  <div class="attr brawn">{attributes.brawn}</div>
  <div class="attr agility">{attributes.agility}</div>
  <div class="attr intellect">{attributes.intellect}</div>
  <div class="attr cunning">{attributes.cunning}</div>
  <div class="attr willpower">{attributes.willpower}</div>
  <div class="attr presence">{attributes.presence}</div>
</div>

<div class="traits">
    <!-- Skills -->
  {#if skills.length}
    <h3>Skills</h3>
    <ul>
      {#each skills as s}
        <li>{s.name}</li>
      {/each}
    </ul>
  {/if}

  <!-- Talents -->
  {#if talents.length}
    <h3>Talents</h3>
    <ul>
      {#each talents as t}
        <li><strong>{t.name}</strong>{t.description ? `: ${t.description}` : ''}</li>
      {/each}
    </ul>
  {/if}

  <!-- Abilities -->
  {#if abilities.length}
    <h3>Abilities</h3>
    <ul>
      {#each abilities as a}
        <li><strong>{a.name}</strong>{a.description ? `: ${a.description}` : ''}</li>
      {/each}
    </ul>
  {/if}

  <!-- Equipment -->
  {#if equipment.length}
    <h3>Equipment</h3>
    <ul>
      {#each equipment as e}
        <li><strong>{e.name}</strong>{e.description ? `: ${e.description}` : ''}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
.traits {
  font-family: 'Bebas Neue';
  color: #000;
  background-color: #ffffff;
}
h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  margin-top: 2rem;
  border-bottom: .5px solid #843d23;
  color:#06AFDF;
}
ul {
  padding: 0;
  padding-left: 2rem;            /* removes the indent */
  text-align: left;      /* forces text to left edge */
}
li {
  font-size: 1rem;
  line-height: 1.3;
  margin-left: 3;
}
.statblock-wrapper {
  position: relative;
  display: inline-block;
  font-family: 'Bebas Neue', sans-serif;
  background-color: #ffffff;
}

.statblock-bg {
  display: block;
  max-width: 100%;
}

/* Derived attributes (position these numbers where they belong) */
.derived {
  position: absolute;
  font-weight: bold;
  font-size: 2rem;
  color: #000;
}

.soak   {top: 70%; left: 13%; }
.wounds {top: 70%; left: 36%; }
.strain {top: 70%; left: 60%; }
.defense-ranged {top: 70%; left: 80%; }
.defense-melee  {top: 70%; left: 90%; }

.header {
  /* position: absolute; */
  /*top: 3rem;   adjust to taste */
  left: 27%;
  transform: translateX(-50%);
  font-size: 5rem;
  color: #06AFDF;
  text-align: center;
  white-space: nowrap;
  background-color: #ffffff;
}

.header .type {
  font-size: 3rem;
  color: #666;
  font-style: italic;
}

/* Characteristics (position these inside the circles) */
.attr {
  position: absolute;
  font-weight: bold;
  font-size: 2.2rem;
  text-align: center;
  width: 40px;
  color: #000
}

.brawn     {top: 2%; left: 6%; }
.agility   {top: 2%; left: 21%; }
.intellect {top: 2%; left: 38%; }
.cunning   {top: 2%; left: 54%; }
.willpower {top: 2%; left: 69%; }
.presence  {top: 2%; left: 86%; }



</style>
