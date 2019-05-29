# DB設計


## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|String|null:false|
|email|String|null:false,unique|
|password|String|null:false|

### Association
- has_many :group_user
- has_many :group, through: :group_user
- has_many :chat

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|String|null:false|

### Association
- has_many :group_user
- has_many :user, through: :group_user
- has_many :chat


## chatテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|group_id|Integer|null:false,foreign_key:true,add_index|
|user_id|Integer|null:false,foreign_key:true,add_index|
|image|String||

### Association
- belongs_to :user
- belongs_to :group

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|Integer|null:false,foreign_key:true|
|user_id|Integer|null:false,foreign_key:true|

### Association
- belongs_to :group
- belongs_to :user
