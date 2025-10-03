import { ItemView, WorkspaceLeaf } from 'obsidian';
import {mount, unmount} from 'svelte'
import type { GenesysNPC } from './StatBlock';
import Statblock from './Statblock.svelte';
import { derived } from 'svelte/store';

export const VIEW_TYPE = "Genesys_Stat_Block";

export class StatView extends ItemView {
    stats: ReturnType<typeof Statblock> | undefined;
    loadedNpc: GenesysNPC
    constructor(leaf:WorkspaceLeaf, npc:GenesysNPC){
        super(leaf)
        this.loadedNpc = npc
    }

    getViewType(): string {
        return VIEW_TYPE;
    }
    getDisplayText(): string {
        return "Genesys_Stat_Block";
    }

    protected async onOpen(): Promise<void> {
        this.stats = mount(Statblock, {
            target: this.contentEl,
            props:{
                attributes: this.loadedNpc.attributes,
                derived: this.loadedNpc.derived_attributes,
                name:this.loadedNpc.name,
                type:this.loadedNpc.type,
                skills:this.loadedNpc.skills,
                talents:this.loadedNpc.talents,
                abilities:this.loadedNpc.abilities,
                equipment:this.loadedNpc.equipment
            }

        })
    }

    async onClose() {
    if (this.stats) {
      // Remove the Counter from the ItemView.
      unmount(this.stats);
    }
  }

}