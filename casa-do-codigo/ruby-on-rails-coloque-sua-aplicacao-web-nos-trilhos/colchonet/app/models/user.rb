class User < ApplicationRecord
  EMAIL_REGEXP = /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/

  # Validações de presença, informações obrigatórias no formulário
  validates_presence_of :email, :full_name, :location, :password
  validates_confirmation_of :password
  validates_length_of :bio, minimun: 30, allow_brank: false
  validates_uniqueness_of :email

  # Essa validação pode ser representada da seguinte forma:
  # validates_format_of :email, with: EMAIL_REGEXP
  validate do
    errors.add(:email, :invalid) unless email.match(EMAIL_REGEXP)
  end
end
