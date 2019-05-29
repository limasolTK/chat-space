# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

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
