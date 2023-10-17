<script setup>
import { outlinedCloudDownload } from "@quasar/extras/material-icons-outlined";
import { exportFile, useQuasar } from "quasar";
const props = defineProps({
    columns: {
        type: [Array],
    },
    rows: {
        type: Array,
    },
});
const $q = useQuasar();
function wrapCsvValue(val, formatFn, row) {
    let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

    formatted =
        formatted === void 0 || formatted === null ? "" : String(formatted);

    formatted = formatted.split('"').join('""');
    /**
     * Excel accepts \n and \r in strings, but some other CSV parsers do not
     * Uncomment the next two lines to escape new lines
     */
    // .split('\n').join('\\n')
    // .split('\r').join('\\r')

    return `"${formatted}"`;
}

function exportTable() {
    // naive encoding to csv format
    const content = [props.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
            props.rows.map((row) =>
                props.columns
                    .map((col) =>
                        wrapCsvValue(
                            typeof col.field === "function"
                                ? col.field(row)
                                : row[
                                      col.field === void 0
                                          ? col.name
                                          : col.field
                                  ],
                            col.format,
                            row
                        )
                    )
                    .join(",")
            )
        )
        .join("\r\n");

    const status = exportFile("table-export.csv", content, "text/csv");

    if (status !== true) {
        $q.notify({
            message: "Browser denied file download",
            color: "negative",
            icon: "warning",
        });
    }
}
</script>

<template>
    <q-btn
        :icon="outlinedCloudDownload"
        @click="exportTable"
        :class="
            $q.dark.isActive
                ? 'bg-dark text-blue-grey-3'
                : 'bg-white text-blue-grey-8'
        "
        flat
    >
        <q-tooltip class="bg-primary" anchor="top middle" self="center middle">
            Export to CSV
        </q-tooltip>
    </q-btn>
</template>

<style scoped></style>
