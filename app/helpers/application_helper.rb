module ApplicationHelper
  def webpack_javascripts_tag(name)
    filename = "#{name}.bundle.js"
    asset_url = Rails.application.config.asset_host
    src = "#{asset_url}/assets/#{filename}"

    if Rails.env.development?
    elsif Rails.configuration.webpack[:manifest]
      asset_name = Rails.configuration.webpack[:manifest]["#{name}.js?7.1.40"]
      if asset_name
        src = "#{asset_url}/assets/#{asset_name}"
      end
    end
    javascript_include_tag(src)
  end
end

# def javascript_include_tag(*sources)
#   options = sources.extract_options!.stringify_keys
#   path_options = options.extract!("protocol", "extname", "host", "skip_pipeline").symbolize_keys
#   sources.uniq.map { |source|
#     tag_options = {
#         "src" => path_to_javascript(source, path_options)
#     }.merge!(options)
#     content_tag("script".freeze, "", tag_options)
#   }.join("\n").html_safe
# end
