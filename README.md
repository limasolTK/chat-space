# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|Strings|null:false|
|email|String|null:false,unique|
|password|String|null:false|

### Association
- has_many :group_user
- has_many :group, through: :group_user

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|Strings|null:false|

### Association
- has_many :group_user
- has_many :user, through: :group_user


## chatテーブル
|Column|Type|Options|
|------|----|-------|
|text|Strings||
|group_id|Integer|null:false,foreign_key:true,add_index|
|user_id|Integer|null:false,foreign_key:true,add_index|
||||
### Association


* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
