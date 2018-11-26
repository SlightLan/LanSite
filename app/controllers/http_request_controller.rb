class HttpRequestController < ApplicationController
  def show
    @accesskey = "AccseeKey"
    @secretkey = "SecretKey" + "&"
    Time.zone = "UTC"
    @time = Time.zone.now.strftime('%Y-%m-%dT%H:%M:%SZ')
    @hash = Hash.new
    @hash["SignatureMethod"] = "HMAC-SHA1"
    @hash["AccessKeyId"] = @accesskey
    @hash["SignatureVersion"] = "1.0"
    # @hash["Format"] = "XML"
    @hash["Timestamp"] = @time
    @hash["SignatureNonce"] = UUID.generate

    @hash["Action"] = "SendSms"
    @hash["Version"] = "2017-05-25"
    @hash["RegionId"] = "cn-hangzhou"
    @hash["PhoneNumbers"] = "13217314907"
    @hash["TemplateCode"] = "SMS_147201673"

    @hash = @hash.sort_by{|key, val|key}
    @final_params = ""
    @params = "GET&/"
    @hash.each do |hash1|
      @params += "&" + hash1[0] + "=" + hash1[1]
      @final_params += "&" + hash1[0] + "=" + hash1[1]
    end

    Rails::logger.info(@params)
    @params = URI.escape(@params, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    Rails::logger.info(@params)

    key = @secretkey.encode("utf-8")
    digest = OpenSSL::Digest::Digest.new('sha1')
    string_to_sign = @params.encode("utf-8")
    @hashed = Base64.encode64(OpenSSL::HMAC.digest(digest, key, string_to_sign))

    @final_params = @hashed.chop + @final_params
    @final_params = URI.escape(@final_params, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    @final_params = @final_params.gsub("%3D","=")
    @final_params = @final_params.gsub("%26","&")
    Rails::logger.info(@final_params)

    @url = "http://dysmsapi.aliyuncs.com/?Signature=" + @final_params
    request = Typhoeus::Request.new(
        @url,
        method: :get,
        )
    request.run
    @response = request.response
  end
end
