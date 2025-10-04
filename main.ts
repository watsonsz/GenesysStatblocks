import { parseYaml, App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { DEFAULT_GENESYS } from 'objects/StatBlock';
import type { GenesysNPC } from 'objects/StatBlock';
import Statblock from './objects/Statblock.svelte'
import { VIEW_TYPE, StatView } from 'objects/StatView';
import {mount, unmount} from 'svelte'
// Remember to rename these classes and interfaces!

export default class GenesysStatBlock extends Plugin {
	settings: MyPluginSettings;

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

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}

class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
