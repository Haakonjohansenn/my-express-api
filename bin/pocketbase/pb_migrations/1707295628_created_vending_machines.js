/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sf5noiv026xuiq2",
    "created": "2024-02-07 08:47:08.306Z",
    "updated": "2024-02-07 08:47:08.306Z",
    "name": "vending_machines",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t0kgetls",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pojxoasd",
        "name": "price",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sf5noiv026xuiq2");

  return dao.deleteCollection(collection);
})
