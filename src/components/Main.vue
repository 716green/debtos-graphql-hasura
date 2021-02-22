<template>
  <div class="main">
    <h1>{{ stack }}</h1>
    <!-- <code>npm run docker</code><br />
    <code>http://localhost:8080/console</code> -->
    <strong>Limit: </strong>
    <input type="number" label="Limit" v-model="limit" width="100px" />
    <br /><br />
    <label for="columns"><strong>Choose a column: </strong></label>

    <select @change="gqlQuery" :name="columns" v-model="columns">
      <option v-for="(col, i) in cols" :key="col[i]" :value="col.column">
        {{ col.name }}
      </option>
    </select>
    <br />
    <br />
    <div class="table" v-if="gqlResultLength > 0">
      <table>
        <tr>
          <th>{{ columns.toUpperCase() }}</th>
        </tr>
        <tr v-for="result in gqlResults" :key="result.id">
          <td>{{ result[columns] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Main",
  props: {
    stack: String,
  },
  data() {
    return {
      gqlResults: null,
      limit: 10,
      cols: [
        {
          name: "Database ID",
          column: "id",
        },
        {
          name: "Name",
          column: "fullname",
        },
        {
          name: "Creditor",
          column: "originalcreditor",
        },
        {
          name: "Balance",
          column: "currentbalance",
        },
        {
          name: "Chargeoff Date",
          column: "datechargedoff",
        },
      ],
      columns: [],
    };
  },
  computed: {
    gqlResultLength() {
      return this.gqlResults?.length;
    },
    queryColumns() {
      // return ["id", "fullname", "address", "address2", "city", "state", "zip"];
      return this.columns;
    },
    query() {
      return `query getAccounts {
        debtportfolio_dbase(limit: ${this.limit}) {
          ${this.queryColumns}
        }
      }`;
    },
  },
  methods: {
    gqlQuery() {
      const url = "http://localhost:8080/v1/graphql";
      let params = {
        query: this.query,
      };
      axios
        .post(url, params)
        .then((res) => {
          this.gqlResults = res.data.data.debtportfolio_dbase;
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
code {
  color: white;
  background-color: black;
}
td,
th {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
  text-align: center;
}
table {
  width: 100%;
  border-spacing: 0;
}
.table {
  display: flex;
  margin: auto;
  width: 300px;
}
</style>
