class MessagesController < ApplicationController
  def index
    
  end

  def new
    @message = Message.new    
  end

  def create
    @message = Message.new(create_params)
    @message.save
  end

  private
  def create_params
    params.require(:message).permit
  end
end
