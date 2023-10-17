<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
</script>
<template>
    <q-list
        class="rounded-borders"
        :class="$q.dark.isActive ? 'bg-darker' : 'bg-white'"
    >
        <q-expansion-item
            group="somegroup"
            label="What is Lorem Ipsum?"
            header-class="rounded-borders"
            header-style="border-bottom-right-radius:0; border-bottom-left-radius:0"
        >
            <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
            </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item group="somegroup" label="Why do we use it?">
            <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
            </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item group="somegroup" label="Where does it come from?">
            <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
            </q-card>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item group="somegroup" label="Where can I get some?">
            <q-card>
                <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
            </q-card>
        </q-expansion-item>
    </q-list>
</template>
