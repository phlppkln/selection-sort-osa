<template>
  <table border="1" width="100%" height="100%">
    <thead>
      <th>ID</th>
      <th>PersonID</th>
      <th>Datum</th>
      <th>Lösungsweg</th>
      <th>SchrittID</th>
      <th>Soll-Werkzeug ID</th>
      <th>Ist-Werkzeug ID</th>
      <th>Soll-Karten ID</th>
      <th>Ist-Karten ID</th>
      <th>Anzahl Fehler Lösungsschritt</th>
      <th>Anzahl Fehler Gesamt</th>
      <th>Kommentar</th>
    </thead>
    <tr v-for="item in log" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.personID }}</td>
      <td>{{ item.date }}</td>
      <td>{{ item.solutionPath }}</td>
      <td>{{ item.stepID }}</td>
      <td>{{ item.targetToolID }}</td>
      <td>{{ item.realToolID }}</td>
      <td>{{ item.targetCardID }}</td>
      <td>{{ item.realCardID }}</td>
      <td>{{ item.errorCountStep }}</td>
      <td>{{ item.errorCountTotal }}</td>
      <td>{{ item.comment }}</td>
    </tr>
  </table>
</template>

<script>
import logJson from "../../data/log.json"

export default {
  data() {
    return {
      log: logJson,
    /*  log: [
    {
      id: -1,
      personID: 0,
      date: "2021-09-01, 15:01:05",
      solutionPath: 0,
      stepID2: 0,
      targetToolID: 0,
      realToolID: 0,
      targetCardID: 0,
      realCardID: 0,
      errorCountStep: 0,
      errorCountTotal: 0,
      comment: "Rückmeldung für richtige Lösung wird ausgegeben"
    }
],*/
      nextLogID: 1,
    };
  },
  methods: {
    addNewLogEntry: function(){
      this.log.push({
        id: this.nextLogID++,
        personID: 0,
        date: new Date.toLocaleString(),
        solutionPath: this.selectedSolutionPath,
      })
    }
  },
};
</script>

<style>
</style>