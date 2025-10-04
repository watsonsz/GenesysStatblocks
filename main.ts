import { parseYaml, App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { DEFAULT_GENESYS } from 'objects/StatBlock';
import type { GenesysNPC } from 'objects/StatBlock';
import Statblock from './objects/Statblock.svelte'
import { VIEW_TYPE, StatView } from 'objects/StatView';
import {mount, unmount} from 'svelte'
// Remember to rename these classes and interfaces!

export default class GenesysStatBlock extends Plugin {
	async onload() {
		this.registerMarkdownCodeBlockProcessor("genesys", (source, el, ctx) => {
      let parsed: GenesysNPC;
        const obj = parseYaml(source);
        parsed = { ...DEFAULT_GENESYS, ...obj };
		mount(Statblock, {
            target: el,
            props:{
                attributes: parsed.attributes,
                derived: parsed.derived_attributes,
                name:parsed.name,
                type:parsed.type,
                skills:parsed.skills,
                talents:parsed.talents,
                abilities:parsed.abilities,
                equipment:parsed.equipment
            }

        })
  	  
    });

	
	}

	onunload() {

	}

}
