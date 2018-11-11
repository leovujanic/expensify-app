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