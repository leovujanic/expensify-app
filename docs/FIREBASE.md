# FIREBASE data

## Rules


Protect user area

```
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
        ".read": false,
        ".write": false,
        "users": {
    	    "$user_id": {
      	        ".read": "$user_id === auth.uid",
    	        ".write": "$user_id === auth.uid",
            }
        }
  }
}
```

Data Validation

```
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
    	"$user_id": {
      	".read": "$user_id === auth.uid",
    		".write": "$user_id === auth.uid",
        "expenses": {
          "expense_id": {
            ".validate": "newData.hasChildren(['description', 'note', 'amount', 'createdAt'])",
            "description": {
              ".validate": "newData.isString() && newData.val().length > 0"
            },
            "note": {
              ".validate": "newData.isString()"
            },
            "amount": {
              ".validate": "newData.isNumber()"
            },
            "createdAt": {
              ".validate": "newData.isNumber()"
            },
            "$other": {
          		".validate": false,
        	}
          }
        },
        "$other": {
          ".validate": false,
        }
      }
    }
  }
}
```